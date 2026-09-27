export const name="select_window_2";
export const id="dl_5f225ade7c33a2270e6e";
export const url=new URL("../icons/select_window_2.svg?v=1332d522a91f91672d11181f3a054ad5bcf72e3c763f7c555cef814571d538db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
