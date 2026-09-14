export const name="arrow_upward_alt";
export const id="dl_7f95ffc52ca04da68273";
export const url=new URL("../icons/A/arrow_upward_alt.svg?v=dc783c222e6e1d35fa2d65ffc08f6a778f763bd25b67b928de0b574d33f31603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
