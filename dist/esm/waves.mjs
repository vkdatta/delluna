export const name="waves";
export const id="dl_b410607b8153b0f1d1b5";
export const url=new URL("../icons/waves.svg?v=49866ef80ead386ea55b8cddb17804b0e2d73502c6774d1df0da8fd309ce135e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
