export const name="gauge-light";
export const id="dl_2a55aa45c7694720923c";
export const url=new URL("../icons/gauge-light.svg?v=ccbf8c12b84d22edfdc3d405b30a5b8ea5d3d3ab94b7bc862035755190eba09f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
