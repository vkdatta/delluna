export const name="vinyl-record-thin";
export const id="dl_43778a7542452c08ca6a";
export const url=new URL("../icons/vinyl-record-thin.svg?v=dd41063c468752eee67d9b9e1f176d985ca6727c8f797bfcad8942b1264a6831",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
