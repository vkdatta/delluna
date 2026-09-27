export const name="warehouse-thin";
export const id="dl_6a96265606caf2b33fde";
export const url=new URL("../icons/warehouse-thin.svg?v=fa58b69ac60c5f21da050eaa2256a217b0f67564f89a685f070ade628d0c2bb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
