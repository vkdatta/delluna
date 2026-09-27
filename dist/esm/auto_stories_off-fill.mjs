export const name="auto_stories_off-fill";
export const id="dl_8caa883f00a2ac4f1d53";
export const url=new URL("../icons/auto_stories_off-fill.svg?v=362e58038f828b268994fb4b0e987fdf0f8739fce8db5cce4d01ea685fb5b6d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
