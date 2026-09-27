export const name="computer_arrow_up";
export const id="dl_4f0cd1acc73289226170";
export const url=new URL("../icons/computer_arrow_up.svg?v=8e198168df21b7c42686f0e290c07239255c5b02f05d8c57cffc8daec6176d7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
