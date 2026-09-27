export const name="hangout_video_off";
export const id="dl_edc77da2ad53a9b8caa5";
export const url=new URL("../icons/hangout_video_off.svg?v=7be7c415f49615bae73bf3754fcccd804007268ed2a04287d7beb89b1defd3b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
