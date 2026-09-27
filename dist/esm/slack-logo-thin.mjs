export const name="slack-logo-thin";
export const id="dl_71a9662c32e98a358083";
export const url=new URL("../icons/slack-logo-thin.svg?v=6264b963e9541668cf75f7ebd1124f59ad0d1d33d34366d7e968a8518b1e6e19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
