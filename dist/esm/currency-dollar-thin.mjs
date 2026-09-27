export const name="currency-dollar-thin";
export const id="dl_ca2f967e0dc948b49dd1";
export const url=new URL("../icons/currency-dollar-thin.svg?v=b3353d5005bd510ee73606beccda33028777781f2f4b4c6df55e0440f7063d0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
