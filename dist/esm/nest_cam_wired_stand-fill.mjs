export const name="nest_cam_wired_stand-fill";
export const id="dl_31656c9f404507a29e69";
export const url=new URL("../icons/nest_cam_wired_stand-fill.svg?v=36e71d3b22f0c62721d90e5acb17af7ae540dfed067ea142249e81aa4a2c5b68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
