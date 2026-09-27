export const name="podiatry-fill";
export const id="dl_2c399e039a55e590cc81";
export const url=new URL("../icons/podiatry-fill.svg?v=d5b3a09c9bdf0ad227ccb2ddd4dd009245aa557a8aa1dacb9c7d6f510c31959c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
