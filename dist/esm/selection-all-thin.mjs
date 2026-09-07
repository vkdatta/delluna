export const name="selection-all-thin";
export const id="dl_3ee0d9a84af1440da624";
export const url=new URL("../icons/S/selection-all-thin.svg?v=6532a9df46edfbbd22fd5a4bb8e338cdea342071e6dac1fe5e0fb398baa5a662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
