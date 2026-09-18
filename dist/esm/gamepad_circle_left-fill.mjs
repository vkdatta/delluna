export const name="gamepad_circle_left-fill";
export const id="dl_fa01571fb0884fbca842";
export const url=new URL("../icons/G/gamepad_circle_left-fill.svg?v=7333468bf265f6205004ffbf7c94dcaabfaa55d968b9e3a7b8dce2bf647c6244",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
