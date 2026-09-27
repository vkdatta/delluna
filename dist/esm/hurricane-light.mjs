export const name="hurricane-light";
export const id="dl_00609887ed364a73bcf9";
export const url=new URL("../icons/hurricane-light.svg?v=895937cff973b828d267b4084bc07a69b0edcb087608d22aeb092f62123e25a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
