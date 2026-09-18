export const name="search_check_2";
export const id="dl_dab92894a22148de9d26";
export const url=new URL("../icons/search_check_2.svg?v=aac4e05fe750494a4d62e1e6ec1c23e996ce43aee6c78efa414a0a83b8551db8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
