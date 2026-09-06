export const name="check-square-offset-thin";
export const id="dl_4a09848e24014bd5be72";
export const url=new URL("../icons/check-square-offset-thin.svg?v=608b2dea2190dfbe4c7cc0df1720775cf95da9464581e8a5fda608be2d058be3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
