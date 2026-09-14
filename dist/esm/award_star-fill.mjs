export const name="award_star-fill";
export const id="dl_700a299846414dc4b802";
export const url=new URL("../icons/A/award_star-fill.svg?v=41637fb8656fc4edb1a4dab597f023a7d8bca95558fc0582c8afa4319d5e467f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
