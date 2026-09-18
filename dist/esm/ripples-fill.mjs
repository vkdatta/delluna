export const name="ripples-fill";
export const id="dl_e83915f51fec4f5a8579";
export const url=new URL("../icons/ripples-fill.svg?v=7f28e8561d51284eb172173221860e4db897f1c163a6525810cba81a10580deb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
