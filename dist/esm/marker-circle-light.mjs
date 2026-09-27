export const name="marker-circle-light";
export const id="dl_d31072c370da41f6bb31";
export const url=new URL("../icons/marker-circle-light.svg?v=f2704574358c357203b0a47d3bb3eda2169afe69639e2022485d339ea3972bfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
