export const name="problem-fill";
export const id="dl_6fd162c60c23a5267470";
export const url=new URL("../icons/problem-fill.svg?v=97ea60c0ec248e3e1e12cc6a57054d6fdf153780eaa9183e576f44e1817f37b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
