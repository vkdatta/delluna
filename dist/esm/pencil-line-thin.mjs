export const name="pencil-line-thin";
export const id="dl_cfa5368f7fe7428e9ae9";
export const url=new URL("../icons/pencil-line-thin.svg?v=4f7dd26b3d7fc7bcadd52d729da569f763bf78f05d6d4f915cc180cad903091b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
