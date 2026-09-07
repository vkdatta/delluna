export const name="crown-simple-thin";
export const id="dl_cc0b143961864753bbf3";
export const url=new URL("../icons/crown-simple-thin.svg?v=dd682292bc576ac9d181c166afa5bc9e6b70f9482ff4a7bebf045f639abb2890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
