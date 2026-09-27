export const name="number-circle-nine-thin";
export const id="dl_19994ae6686745b1a015";
export const url=new URL("../icons/number-circle-nine-thin.svg?v=d1090e2ca9b75ae059a92a7564fe81ddd44e81334688306d4705d969314ab9f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
