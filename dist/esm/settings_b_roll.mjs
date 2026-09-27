export const name="settings_b_roll";
export const id="dl_dfaac600b4091ee99ef9";
export const url=new URL("../icons/settings_b_roll.svg?v=ea4ff7fe7ab442c951f1005ac500a6ef5244fac96d9e6b03b272f71cdda40d4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
