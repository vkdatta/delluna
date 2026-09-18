export const name="print_connect-fill";
export const id="dl_3c0107be23da42e4a0b1";
export const url=new URL("../icons/P/print_connect-fill.svg?v=31a0307c6536cf9ce2eba8bfb49506a2eb11b80d62969ee1cf4c3462acaa52fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
