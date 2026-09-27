export const name="columns-plus-right-light";
export const id="dl_bde6d3dedfce42f5a998";
export const url=new URL("../icons/columns-plus-right-light.svg?v=55b0629577bf378b941a4b58ba198fd654d6b323b554553aef95df7be4e1b1b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
