export const name="hammer-bold";
export const id="dl_959605dff1e14bc49c68";
export const url=new URL("../icons/hammer-bold.svg?v=4360d4efeee43ce5f6c45abe8e178b83c3f15cbfeb34485c5b65aab17c3014f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
