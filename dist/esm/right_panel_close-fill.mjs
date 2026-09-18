export const name="right_panel_close-fill";
export const id="dl_ce454c8fbf53409984b2";
export const url=new URL("../icons/R/right_panel_close-fill.svg?v=23a586d09d76e12c1bdd10bade0569e9dc686cc16b910b469188fa82e94c1989",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
