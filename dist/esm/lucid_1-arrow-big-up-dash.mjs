export const name="lucid_1-arrow-big-up-dash";
export const id="dl_ce4ad41bb0c74ee08801";
export const url=new URL("../icons/lucid_1-arrow-big-up-dash.svg?v=cf22dca00fcb1efce4c87e2df776a5e79fe801390a6e14cd1fd2a2e5713354ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
