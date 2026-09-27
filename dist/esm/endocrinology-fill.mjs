export const name="endocrinology-fill";
export const id="dl_5ff9a3bef6dffd58b8f1";
export const url=new URL("../icons/endocrinology-fill.svg?v=7618506da8ad2f4b905bb2b1df1adb6bfb228051adad09adad6fdf856693a76b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
