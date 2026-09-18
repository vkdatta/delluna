export const name="outdoor_garden";
export const id="dl_bac05bfdbdaa4fb78991";
export const url=new URL("../icons/O/outdoor_garden.svg?v=6b7f5a8d1b896d304fb428888209395c040ea3039ab4584036ee38a1a974ae23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
