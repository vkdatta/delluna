export const name="tag-thin";
export const id="dl_d01552e803c342fcbf1a";
export const url=new URL("../icons/T/tag-thin.svg?v=3e084da8cd487fa16f9fe16e24a20d264e29afa688371ff6facc1abfb39b76f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
