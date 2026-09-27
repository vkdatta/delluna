export const name="lab_panel";
export const id="dl_ada1151b18587215eca6";
export const url=new URL("../icons/lab_panel.svg?v=2c347f4d5cc77ed15f643340476a1797f5a5da7f5b2f8e248146fb398a6a1783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
