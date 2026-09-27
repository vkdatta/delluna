export const name="prompt_suggestion";
export const id="dl_28fa9121b8622f1450b0";
export const url=new URL("../icons/prompt_suggestion.svg?v=dc0065bc3647bd3b78836ff16bf1b447d00cbda4f977b5c5b1a03fa5d6008aff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
