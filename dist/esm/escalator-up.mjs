export const name="escalator-up";
export const id="dl_df6f964906d6476b97a4";
export const url=new URL("../icons/escalator-up.svg?v=77619be3d398ad0eca768aa678706fd3d8e58fa420bd794b1601a13c7f426b6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
