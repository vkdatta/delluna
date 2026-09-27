export const name="square-library";
export const id="dl_4c1ef0ec2f9a45e78ebe";
export const url=new URL("../icons/square-library.svg?v=517bb3344ff74d0cc2d14a23a45cad5feb8501f335a73764896561b7baf2b2eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
