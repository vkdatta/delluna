export const name="caret-circle-down-light";
export const id="dl_e81311ba1b374b05aa59";
export const url=new URL("../icons/caret-circle-down-light.svg?v=24d0dcdfd9a69cc4a583d49b4b736aa02ec1625fce7f5cb196ec5746f85a8606",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
