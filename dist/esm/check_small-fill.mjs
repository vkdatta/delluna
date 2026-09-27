export const name="check_small-fill";
export const id="dl_ce643273bbf4578646a1";
export const url=new URL("../icons/check_small-fill.svg?v=f963d446a8d75abc33a55fdcfc1cc3687bb479b7efc755f22e46eb6a2867a339",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
