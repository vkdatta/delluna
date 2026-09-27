export const name="scan-smiley-bold";
export const id="dl_8fd7561eae1d51ca2e26";
export const url=new URL("../icons/scan-smiley-bold.svg?v=361a011feb92273e7409af22ad816b08e2860ce24a8d59805ae19cd654ddd61b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
