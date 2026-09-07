export const name="windmill";
export const id="dl_86c55ffa7d1344e3894c";
export const url=new URL("../icons/W/windmill.svg?v=acaa858699ab2863d1f821b26b9e907e6ba871d0c05edff7528cdfccf83b9db9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
