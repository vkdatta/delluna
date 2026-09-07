export const name="snowflake-thin";
export const id="dl_35d83ce1497c4bbab561";
export const url=new URL("../icons/S/snowflake-thin.svg?v=f673893a72d109e2f9566a1dcbfa2d61dfdd4d99e73ead31fd4a4801d47ca444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
