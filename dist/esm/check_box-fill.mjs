export const name="check_box-fill";
export const id="dl_5f2d92de90194d7f81cd";
export const url=new URL("../icons/check_box-fill.svg?v=d7838052f5ba0dd27d7922f3959ec267b82ba0b3c612b4027342f7e7d80fb7f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
