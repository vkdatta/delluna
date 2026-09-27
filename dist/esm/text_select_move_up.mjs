export const name="text_select_move_up";
export const id="dl_19cc9bd25a9155b5bb99";
export const url=new URL("../icons/text_select_move_up.svg?v=8c30f36250976b1322b0ec5b1c9e3b3ad9779cc4d56e051dd1d0ad41d290f27c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
