export const name="power_input";
export const id="dl_55176c07b981438689e1";
export const url=new URL("../icons/P/power_input.svg?v=10e190fcfd659ff97d22fca6729efd4d1c3d7ded6b6d8e1d911db5bdcaacc8d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
