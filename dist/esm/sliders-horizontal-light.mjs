export const name="sliders-horizontal-light";
export const id="dl_4b9de69961cc45be82cd";
export const url=new URL("../icons/S/sliders-horizontal-light.svg?v=fc2bcb8ac38ce3a38f0dabe03e2e6dd19dbd40e978b86797e498e8ac80cedd18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
