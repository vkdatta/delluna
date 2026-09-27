export const name="sports_rugby-fill";
export const id="dl_9bac3ff9202d538e73b9";
export const url=new URL("../icons/sports_rugby-fill.svg?v=05719dd13288e7498bf786cfbd80137c37fce53c58d5e097552340223e119164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
