export const name="escalator-down-thin";
export const id="dl_b7c7f912f26540f58558";
export const url=new URL("../icons/escalator-down-thin.svg?v=4495b2d36d82638165210f0e55b7f51403660d8a5b4110783ba1aae22f8a9cd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
