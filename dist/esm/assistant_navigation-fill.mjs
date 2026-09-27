export const name="assistant_navigation-fill";
export const id="dl_471b5800bed9bd2eec59";
export const url=new URL("../icons/assistant_navigation-fill.svg?v=37590f3f793ad73b4498acc8377942303373907024e635f914f82269dbeefa9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
