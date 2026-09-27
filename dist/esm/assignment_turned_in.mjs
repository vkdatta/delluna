export const name="assignment_turned_in";
export const id="dl_f9dd0cbf7143c8ac2a0c";
export const url=new URL("../icons/assignment_turned_in.svg?v=f71a024577911480b81cec707adcaeeece99665006ef1c315f24ea961049744a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
