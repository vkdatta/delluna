export const name="acute-fill";
export const id="dl_be0fefc5924cb6a02bab";
export const url=new URL("../icons/acute-fill.svg?v=b8bbbca985a4baebc258bd7d9bea50e441540b56bf9c5c81186c6bda1d0251af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
