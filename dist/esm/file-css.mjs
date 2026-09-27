export const name="file-css";
export const id="dl_ff07bd427972437c8136";
export const url=new URL("../icons/file-css.svg?v=a28ef099791b6c1f6d721e08074b13adabbdba0d7cd207d47b93713cff772f68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
