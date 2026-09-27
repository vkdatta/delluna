export const name="file-minus-thin";
export const id="dl_3233285909ea4862b55c";
export const url=new URL("../icons/file-minus-thin.svg?v=152c30fb028534725fac4f82365bba712865c325e272cb310d2b81f52a21ee2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
