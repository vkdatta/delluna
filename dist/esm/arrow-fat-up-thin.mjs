export const name="arrow-fat-up-thin";
export const id="dl_b0c99e6e5205434e9579";
export const url=new URL("../icons/arrow-fat-up-thin.svg?v=24ce36e966fb54188990e62d89da38df0cae3d10af3984c0aa755ed6a55f018d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
