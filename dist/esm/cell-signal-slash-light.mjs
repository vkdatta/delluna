export const name="cell-signal-slash-light";
export const id="dl_42450adf4ab14cc09960";
export const url=new URL("../icons/cell-signal-slash-light.svg?v=28e0a3e90f2029fec164d5abd08dbbd371cb0d080b25ce42d4d6ab2e94a32790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
