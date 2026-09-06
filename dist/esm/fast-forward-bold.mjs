export const name="fast-forward-bold";
export const id="dl_15312ea8543e4c819986";
export const url=new URL("../icons/fast-forward-bold.svg?v=347c094a8276ddb521e28872d578d396c945c025972f1a1765bd7654f768c734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
