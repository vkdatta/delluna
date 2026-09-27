export const name="fullscreen_portrait";
export const id="dl_bdab9c903194c62745ec";
export const url=new URL("../icons/fullscreen_portrait.svg?v=0e044bcc9f76db6321a99fa41f1204397ac05c1bc16d113a1e0f7e84ae74fd7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
